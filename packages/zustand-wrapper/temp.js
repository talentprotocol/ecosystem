import React from "react";
import create from "zustand";
import { get } from "src/utils/requests";
import { toast } from "react-toastify";
import { talentsService } from "src/api/talents";
import { careerUpdatesService } from "src/api";
import { ToastBody } from "src/components/design_system/toasts";

const messagesStore = create(set => ({
  messageCount: 0,
  increaseMessageCount: () => set(state => ({ messageCount: state.messageCount + 1 })),
  clearMessageCount: () => set({ messageCount: 0 })
}));

const railsContextStore = create(set => ({
  railsContext: {},
  setRailsContext: newRailsContext => set({ railsContext: newRailsContext })
}));

const urlStore = create(set => ({
  url: "",
  changeURL: newURL => set({ url: newURL })
}));

const loggedInUserStore = create(set => ({
  currentUser: undefined,
  loading: false,
  fetchCurrentUser: async () => {
    const response = await get("/api/v1/sessions/logged_in_user").catch(error => console.error(error));
    set({ currentUser: response.user, loading: false });
  }
}));

const useProfileOverviewStore = create(set => ({
  profileOverview: undefined,
  fetchProfileOverview: async profileUsername => {
    const { data } = await talentsService.getProfileOverview(profileUsername).catch(err => {
      console.error(err);
      toast.error(<ToastBody heading={"Profile not found"} />);
      setTimeout(() => {
        window.location.href = "/home";
      }, 500);
    });

    set({ profileOverview: data.talent });
  }
}));

const useCareerUpdatesStore = create(set => ({
  // In the future we should put the list of career updates here and not only the one created
  careerUpdates: [],
  createCareerUpdate: async (message, selectedPills) => {
    const { data } = await careerUpdatesService.sendUpdate(message, selectedPills).catch(err => {
      console.error(err);
      toast.error(<ToastBody heading={"Error"} />, { autoClose: 3000 });
    });

    if (data.career_update) {
      set(state => ({ careerUpdates: [...state.careerUpdates, data.career_update] }));
      toast.success(<ToastBody heading="Success!" body={"Your update was sent to your subscribers."} />, {
        autoClose: 3000
      });
    }
  }
}));

export {
  messagesStore,
  railsContextStore,
  urlStore,
  loggedInUserStore,
  useProfileOverviewStore,
  useCareerUpdatesStore
};
