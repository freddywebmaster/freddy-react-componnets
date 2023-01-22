import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";

export interface ColumnTableResponsive<Element> {
  title: string;
  acceskey: string;
  hidden?: boolean;
  render?: (item: Element) => JSX.Element;
  onClickItem?: (item: Element) => void;
  filter?: JSX.Element;
  filterTwo?: JSX.Element;
}

export interface ITableResponsive<T> {
  columns: ColumnTableResponsive<T>[];
  data: T[];
  actions?: (item: T) => JSX.Element;
  actionsTitle?: string;
  bgColor?: "blue" | "red" | "yellow" | "indigo" | "green" | "pink";
  enableHideColumns?: boolean;
}

export function TableResponsive<T>({
  columns,
  data,
  actions,
  actionsTitle,
  bgColor,
  enableHideColumns = true,
}: ITableResponsive<T>) {
  const colors = {
    blue: "bg-blue-500",
    red: "bg-red-600",
    yellow: "bg-yellow-500",
    indigo: "bg-indigo-500",
    green: "bg-green-500",
    pink: "bg-pink-500",
  };

  const [showCheckBoxes, setShowCheckBoxes] = useState<boolean>(false);
  const [checkStates, setCheckStates] = useState<any>({});

  const populateCheckBoxes = () => {
    let result: any = {};

    columns.map((col) => {
      result[col.acceskey] = !col.hidden || false;
    });

    setCheckStates(result);
  };

  useEffect(() => {
    populateCheckBoxes();
  }, []);

  return (
    <>
      {enableHideColumns && (
        <button
          onClick={() => setShowCheckBoxes(!showCheckBoxes)}
          className={`outline-none h-8 w-8 rounded-lg text-white ${
            showCheckBoxes
              ? "bg-red-400"
              : `${bgColor ? colors[bgColor] : colors.blue}`
          } flex items-center justify-center mb-2`}
        >
          {showCheckBoxes ? <IoCloseOutline /> : <AiFillEyeInvisible />}
        </button>
      )}

      {showCheckBoxes && enableHideColumns && (
        <div className="flex flex-wrap items-center gap-5 mb-5 p-4 rounded-xl bg-gray-200">
          {columns.map((col, i) => (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={i}
            >
              <label className="text-xs">{col.title}</label>
              <input
                className="h-4 w-4 cursor-pointer"
                type={"checkbox"}
                checked={checkStates[col.acceskey]}
                onChange={() =>
                  setCheckStates({
                    ...checkStates,
                    [col.acceskey]: !checkStates[col.acceskey],
                  })
                }
              />
            </div>
          ))}
        </div>
      )}
      <div className="overflow-x-scroll">
        <table className="bg-gray-200 shadow-lg w-full rounded-lg overflow-hidden">
          <thead>
            {columns.length !== 0 && (
              <tr className={`${bgColor ? colors[bgColor] : colors.blue}`}>
                {columns.map((col, i) => {
                  if (col.hidden || !checkStates[col.acceskey])
                    return <th className="hidden" key={i}></th>;
                  return (
                    <th className="text-sm text-left px-5 py-4" key={i}>
                      <p className="text-white"> {col.title}</p>

                      {col.filter && col.filter}
                    </th>
                  );
                })}

                {actions && (
                  <th className="text-sm">
                    <p className="text-white"> {actionsTitle || "Actions"}</p>
                  </th>
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
                      if (col.hidden || !checkStates[col.acceskey])
                        return <td className="hidden" key={j}></td>;
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
    </>
  );
}
