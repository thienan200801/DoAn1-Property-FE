import { Fade } from "react-awesome-reveal";

const SectionHeading = ({ content }) => {
  return (
    <Fade>
      <div className="container mx-auto text-center uppercase pb-10 flex flex-col justify-center items-center py-10">
        <div className="flex flex-col items-center">
          <div className="text-slate-700 text-4xl font-medium">{content} </div>
          <div className="mt-4 w-2/4 h-[3px] bg-primary" />
        </div>
      </div>
    </Fade>
  );
};

export default SectionHeading;
