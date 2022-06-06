import BGimage from "@/assets/GoogleMapTA.webp";

const Map = () => {
  return (
    <div className="flex flex-1">
      <img
        src={BGimage}
        alt="googlemap"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default Map;
