import React from "react";
import { TableResponsive, } from "../components/organisms/TableResponsive";
import "../styles/tailwind.css";
export default {
    title: "components/organisms/TableResponsive",
    component: TableResponsive,
};
const Template = (args) => React.createElement(TableResponsive, Object.assign({}, args));
export const SimpleExample = Template.bind({});
SimpleExample.args = {
    columns: [
        { title: "Name", acceskey: "name", hidden: false },
        { title: "Age", acceskey: "age", hidden: false },
    ],
    data: [
        { name: "Freddy", age: 22 },
        { name: "Lorena", age: 18 },
    ],
    bgColor: "green",
};
export const CustomRender = Template.bind({});
CustomRender.args = {
    columns: [
        {
            title: "Image",
            acceskey: "image_url",
            render: (element) => (React.createElement("img", { width: 100, height: 100, className: "object-cover", src: element.image_url })),
            onClickItem: function (element) {
                alert(`click on image of product ${element.name}`);
            },
        },
        { title: "Name", acceskey: "name" },
        { title: "Description", acceskey: "description" },
        {
            title: "Price",
            acceskey: "price",
            render: (element) => (React.createElement("p", { className: "font-bold text-green-700 text-lg" },
                "$",
                element.price)),
        },
    ],
    data: [
        {
            image_url: "https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg",
            name: "Computer Tech",
            description: "Pc gamer full RGB  to play games!",
            price: 50,
        },
        {
            image_url: "https://linuxhint.com/wp-content/uploads/2020/10/learn_linux_quickly.png",
            name: "Linux Book",
            description: "A book to learn linux",
            price: 20,
        },
    ],
};
export const WithActions = Template.bind({});
WithActions.args = {
    columns: [
        {
            title: "Image",
            acceskey: "image_url",
            render: (element) => (React.createElement("img", { width: 100, height: 100, className: "object-cover", src: element.image_url })),
            onClickItem: function (element) {
                window.open(element.image_url, "_blank");
            },
        },
        { title: "Name", acceskey: "name" },
        { title: "Description", acceskey: "description" },
        {
            title: "Price",
            acceskey: "price",
            render: (element) => (React.createElement("p", { className: "font-bold text-green-700 text-lg" },
                "$",
                element.price)),
        },
    ],
    data: [
        {
            image_url: "https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg",
            name: "Computer Tech",
            description: "Pc gamer full RGB  to play games!",
            price: 50,
        },
        {
            image_url: "https://linuxhint.com/wp-content/uploads/2020/10/learn_linux_quickly.png",
            name: "Linux Book",
            description: "A book to learn linux",
            price: 20,
        },
    ],
    actions: (element) => (React.createElement("div", null,
        React.createElement("button", { onClick: () => alert(`deleting the product ${element.name}`), className: "bg-red-600 text-white font-bold uppercase text-xs rounded-lg outline-none py-2 px-3" }, "Delete x"))),
};
export const WithFilters = Template.bind({});
WithFilters.args = {
    columns: [
        {
            title: "Image",
            acceskey: "image_url",
            render: (element) => (React.createElement("img", { width: 100, height: 100, className: "object-cover", src: element.image_url })),
            onClickItem: function (element) {
                window.open(element.image_url, "_blank");
            },
        },
        {
            title: "Name",
            acceskey: "name",
            filter: (React.createElement("input", { className: "border-2 border-gray-300 rounded-lg outline-none p-1" })),
        },
        { title: "Description", acceskey: "description" },
        {
            title: "Price",
            acceskey: "price",
            render: (element) => (React.createElement("p", { className: "font-bold text-green-700 text-lg" },
                "$",
                element.price)),
        },
    ],
    data: [
        {
            image_url: "https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg",
            name: "Computer Tech",
            description: "Pc gamer full RGB  to play games!",
            price: 50,
        },
        {
            image_url: "https://linuxhint.com/wp-content/uploads/2020/10/learn_linux_quickly.png",
            name: "Linux Book",
            description: "A book to learn linux",
            price: 20,
        },
    ],
    actions: (element) => (React.createElement("div", null,
        React.createElement("button", { onClick: () => alert(`deleting the product ${element.name}`), className: "bg-red-600 text-white font-bold uppercase text-xs rounded-lg outline-none py-2 px-3" }, "Delete x"))),
};
//# sourceMappingURL=TableResponsive.stories.js.map