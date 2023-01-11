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
export declare function TableResponsive<T>({ columns, data, actions, actionsTitle, }: ITableResponsive<T>): JSX.Element;
