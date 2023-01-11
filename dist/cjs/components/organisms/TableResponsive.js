import React from "react";
export function TableResponsive({ columns, data, actions, actionsTitle, }) {
    return (React.createElement("div", { className: "overflow-x-scroll" },
        React.createElement("table", { className: "bg-gray-200 shadow-lg w-full rounded-lg" },
            React.createElement("thead", null, columns.length !== 0 && (React.createElement("tr", { className: "bg-blue-500 text-white" },
                columns.map((col, i) => {
                    if (col.hidden)
                        return React.createElement("th", { className: "hidden", key: i });
                    return (React.createElement("th", { className: "text-sm text-left px-5 py-4", key: i }, col.title));
                }),
                actions && (React.createElement("th", { className: "text-sm" }, actionsTitle || "Actions"))))),
            React.createElement("tbody", null, data.length !== 0 &&
                data.map((item, i) => {
                    return (React.createElement("tr", { className: `${i % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-200`, key: i },
                        columns.map((col, j) => {
                            if (col.hidden)
                                return React.createElement("td", { className: "hidden", key: j });
                            return col.render ? (React.createElement("td", { onClick: () => col.onClickItem ? col.onClickItem(item) : null, className: `py-4 px-5 min-w-[50px] max-w-[300px] cursor-pointer text-sm`, key: j }, col.render(item))) : (React.createElement("td", { onClick: () => col.onClickItem ? col.onClickItem(item) : null, className: `py-4 px-5 max min-w-[50px] max-w-[300px] cursor-pointer text-sm`, key: j }, item[col.acceskey]));
                        }),
                        actions && (React.createElement("th", { className: `cursor-pointer px-5` }, actions(item)))));
                })))));
}
//# sourceMappingURL=TableResponsive.js.map