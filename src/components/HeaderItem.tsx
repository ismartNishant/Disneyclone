import { IconType } from "react-icons";
import React from "react"

interface HeaderItemProp {
  name?: string;
  icon?: React.ReactElement<IconType>;
  margin?: string
}

const HeaderItem: React.FC<HeaderItemProp> = ({ name, icon, margin }) => {
  return (
    <div className= { `text-white flex items-center gap-3 text-[16px] cursor-pointer font-semibold hover:underline underline-offset-8  my-${margin}`}>
      <div>
        {icon}
      </div>
      <h2 className='' >{name}</h2>
    </div>

  );
};

export default HeaderItem