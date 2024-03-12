/* eslint-disable react/prop-types */

const NodeName = ({ img, nodeName }) => {
  return (
    <div className="flex gap-2 items-center justify-start">
      <img className="w-5" src={img} />
      <p className="text-[11px] font-lw">{nodeName}</p>
    </div>
  );
};

export default NodeName;
