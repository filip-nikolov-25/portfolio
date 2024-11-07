import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && (
        <div className="p-10  flex justify-center items-center bg-gradient-to-l from-purple-900 to-blue-950">
          <div className="w-[100%] mx-auto border-t-2  border-gray-200">
            <div className="flex justify-center text-white items-center">
              <div className="text-center">
                <p className="pt-10 mb-5 ">Contact me</p>
                <p className="mb-5">filip.nikolov1010@gmail.com</p>
                <p>Probishtip/Skopje,North Macedonia</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
