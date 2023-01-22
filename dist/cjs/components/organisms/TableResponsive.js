import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
export function TableResponsive({ columns, data, actions, actionsTitle, bgColor, enableHideColumns = true, }) {
    const colors = {
        blue: "bg-blue-500",
        red: "bg-red-600",
        yellow: "bg-yellow-500",
        indigo: "bg-indigo-500",
        green: "bg-green-500",
        pink: "bg-pink-500",
    };
    const [showCheckBoxes, setShowCheckBoxes] = useState(false);
    const [checkStates, setCheckStates] = useState({});
    const populateCheckBoxes = () => {
        let result = {};
        columns.map((col) => {
            result[col.acceskey] = !col.hidden || false;
        });
        setCheckStates(result);
    };
    useEffect(() => {
        populateCheckBoxes();
    }, []);
    return (React.createElement(React.Fragment, null,
        enableHideColumns && (React.createElement("button", { onClick: () => setShowCheckBoxes(!showCheckBoxes), className: `outline-none h-8 w-8 rounded-lg text-white ${showCheckBoxes
                ? "bg-red-400"
                : `${bgColor ? colors[bgColor] : colors.blue}`} flex items-center justify-center mb-2` }, showCheckBoxes ? React.createElement(IoCloseOutline, null) : React.createElement(AiFillEyeInvisible, null))),
        showCheckBoxes && enableHideColumns && (React.createElement("div", { className: "flex flex-wrap items-center gap-5 mb-5 p-4 rounded-xl bg-gray-200" }, columns.map((col, i) => (React.createElement("div", { className: "flex flex-col items-center justify-center gap-1", key: i },
            React.createElement("label", { className: "text-xs" }, col.title),
            React.createElement("input", { className: "h-4 w-4 cursor-pointer", type: "checkbox", checked: checkStates[col.acceskey], onChange: () => setCheckStates(Object.assign(Object.assign({}, checkStates), { [col.acceskey]: !checkStates[col.acceskey] })) })))))),
        React.createElement("div", { className: "overflow-x-scroll" },
            React.createElement("table", { className: "bg-gray-200 shadow-lg w-full rounded-lg overflow-hidden" },
                React.createElement("thead", null, columns.length !== 0 && (React.createElement("tr", { className: `${bgColor ? colors[bgColor] : colors.blue}` },
                    columns.map((col, i) => {
                        if (col.hidden || !checkStates[col.acceskey])
                            return React.createElement("th", { className: "hidden", key: i });
                        return (React.createElement("th", { className: "text-sm text-left px-5 py-4", key: i },
                            React.createElement("p", { className: "text-white" },
                                " ",
                                col.title),
                            col.filter && col.filter));
                    }),
                    actions && (React.createElement("th", { className: "text-sm" },
                        React.createElement("p", { className: "text-white" },
                            " ",
                            actionsTitle || "Actions")))))),
                React.createElement("tbody", null, data.length !== 0 &&
                    data.map((item, i) => {
                        return (React.createElement("tr", { className: `${i % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-200`, key: i },
                            columns.map((col, j) => {
                                if (col.hidden || !checkStates[col.acceskey])
                                    return React.createElement("td", { className: "hidden", key: j });
                                return col.render ? (React.createElement("td", { onClick: () => col.onClickItem ? col.onClickItem(item) : null, className: `py-4 px-5 min-w-[50px] max-w-[300px] cursor-pointer text-sm`, key: j }, col.render(item))) : (React.createElement("td", { onClick: () => col.onClickItem ? col.onClickItem(item) : null, className: `py-4 px-5 max min-w-[50px] max-w-[300px] cursor-pointer text-sm`, key: j }, item[col.acceskey]));
                            }),
                            actions && (React.createElement("th", { className: `cursor-pointer px-5` }, actions(item)))));
                    }))))));
}
//# sourceMappingURL=TableResponsive.js.map