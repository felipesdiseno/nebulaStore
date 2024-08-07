import Caurosel from "@/components/Caurosel";
import OpinionComponent from "@/components/OpinionComponent";

function LandingPage() {
  return (
    <div className="flex flex-col ">
      <Caurosel />

      <div className="mb-6 mt-4 p-4 flex flex-col items-center space-y-4">
        <p className="text-xl font-semibold text-gray-600">
          Opiniones de nuestros clientes:
        </p>
        <OpinionComponent />
      </div>
    </div>
  );
}

export default LandingPage;
