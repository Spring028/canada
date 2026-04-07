// @ts-ignore;
import React from 'react';

const ServiceCard = ({
  icon,
  title,
  subtitle1,
  subtitle2,
  onClick
}) => {
  return <div className="bg-[#3B82F6] rounded-xl p-2 text-center cursor-pointer hover:bg-[#2563EB] transition-transform hover:-translate-y-1" onClick={onClick}>
      <div className="mb-1 flex justify-center">
        {React.cloneElement(icon, {
        className: 'text-white',
        size: 24
      })}
      </div>
      <div className="text-white font-bold text-sm">{title}</div>
      {subtitle1 && <div className="text-[10px] text-white opacity-80">{subtitle1}</div>}
      {subtitle2 && <div className="text-[10px] text-white opacity-80">{subtitle2}</div>}
    </div>;
};
export default ServiceCard;