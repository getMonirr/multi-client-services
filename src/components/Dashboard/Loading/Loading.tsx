import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loading;
