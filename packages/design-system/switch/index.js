import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LabelContainer, Slider } from "./styled";
export const Switch = ({ isChecked, onChange, state, isDarkTheme }) => (_jsxs(LabelContainer, { children: [_jsx("input", { type: "checkbox", defaultChecked: isChecked, onClick: state !== "disabled" ? onChange : undefined }), _jsx(Slider, { isChecked: isChecked, state: state, isDarkTheme: isDarkTheme })] }));
