import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-gray-900">Mapper</Link>
          <Link to="/marketplace-upload" className="text-sm text-gray-600 hover:text-gray-900">Template</Link>
          <Link to="/seller-upload" className="text-sm text-gray-600 hover:text-gray-900">Upload</Link>
          <Link to="/mapping" className="text-sm text-gray-600 hover:text-gray-900">Map</Link>
          <Link to="/mappings" className="text-sm text-gray-600 hover:text-gray-900">Mappings</Link>
        </div>

        <div className="text-sm text-gray-500">v1.0</div>
      </div>
    </nav>
  );
}
