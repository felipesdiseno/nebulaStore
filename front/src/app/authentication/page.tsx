import Login from "@/components/Login";
import Register from "@/components/Register";

function Authentication() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Login />
      <Register />
    </div>
  );
}

export default Authentication;
