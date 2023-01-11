import React from "react";
import ModalElement, {
  ModalElementProps,
} from "../components/atoms/ModalElement";
import "../styles/tailwind.css";

export default {
  title: "components/atoms/ModalElement",
  component: ModalElement,
};

const Template = (args: ModalElementProps) => <ModalElement {...args} />;

export const SimpleExample: any = Template.bind({});
SimpleExample.args = {
  modal: (close) => (
    <div className="max-w-[300px]">
      <img
        className="w-full h-[150px] object-cover"
        src="https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"
      />

      <div className="p-5">
        <h2 className="text-gray-800 font-bold text-2xl">My Custom Modal</h2>
        <p>the butthon executes a close fn</p>

        <button onClick={close} className="bg-green-500">
          Ok
        </button>
      </div>
    </div>
  ),
  children: (
    <button className="bg-blue-500 text-white font-bold uppercase rounded-lg py-2 px-4">
      Open Modal
    </button>
  ),
} as ModalElementProps;
