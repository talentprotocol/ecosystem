import { InMemoryPagesInterface } from "./types";

export class InMemoryPages {
  private inMemoryPages: InMemoryPagesInterface;

  constructor() {
    this.inMemoryPages = {};
  }

  update = (pageKey: string, content: string) => {
    this.inMemoryPages[pageKey] = content;
  };

  get = (pageKey: string) => {
    return this.inMemoryPages[pageKey];
  };
}
