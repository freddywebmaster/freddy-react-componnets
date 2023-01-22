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
export declare function TableResponsive<T>({ columns, data, actions, actionsTitle, bgColor, enableHideColumns, }: ITableResponsive<T>): JSX.Element;
