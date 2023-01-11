import React from "react";

export interface ColumnTableResponsive<Element> {
  title: string;
  acceskey: string;
  hidden?: boolean;
  render?: (item: Element) => JSX.Element;
  onClickItem?: (item: Element) => void;
}

export interface ITableResponsive<T> {
  columns: ColumnTableResponsive<T>[];
  data: T[];
  actions?: (item: T) => JSX.Element;
  actionsTitle?: string;
}

export function TableResponsive<T>({
  columns,
  data,
  actions,
  actionsTitle,
}: ITableResponsive<T>) {
  return (
    <div className="overflow-x-scroll">
      <table className="bg-gray-200 shadow-lg w-full rounded-lg">
        <thead>
          {columns.length !== 0 && (
            <tr className="bg-blue-500 text-white">
              {columns.map((col, i) => {
                if (col.hidden) return <th className="hidden" key={i}></th>;
                return (
                  <th className="text-sm text-left px-5 py-4" key={i}>
                    {col.title}
                  </th>
                );
              })}

              {actions && (
                <th className="text-sm">{actionsTitle || "Actions"}</th>
              )}
            </tr>
          )}
        </thead>

        <tbody>
          {data.length !== 0 &&
            data.map((item, i) => {
              return (
                <tr
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } hover:bg-gray-200`}
                  key={i}
                >
                  {columns.map((col, j) => {
                    if (col.hidden) return <td className="hidden" key={j}></td>;
                    return col.render ? (
                      <td
                        onClick={() =>
                          col.onClickItem ? col.onClickItem(item) : null
                        }
                        className={`py-4 px-5 min-w-[50px] max-w-[300px] cursor-pointer text-sm`}
                        key={j}
                      >
                        {/* @ts-ignore */}
                        {col.render(item)}
                      </td>
                    ) : (
                      <td
                        onClick={() =>
                          col.onClickItem ? col.onClickItem(item) : null
                        }
                        className={`py-4 px-5 max min-w-[50px] max-w-[300px] cursor-pointer text-sm`}
                        key={j}
                      >
                        {/* @ts-ignore */}
                        {item[col.acceskey]}
                      </td>
                    );
                  })}

                  {actions && (
                    <th className={`cursor-pointer px-5`}>{actions(item)}</th>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
