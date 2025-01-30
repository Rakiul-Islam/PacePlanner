import { useState } from "react";
import { FaSave, FaFilter, FaSearch } from "react-icons/fa";
import Select from "react-select"; // Make sure to install react-select for the multi-select dropdown

const initialCandidates = [
  { id: 1, name: "John Doe", role: "Candidate", products: ["Product A"] },
  {
    id: 2,
    name: "Jane Smith",
    role: "Group Lead",
    products: ["Product B", "Product C"],
  },
  // Add more candidates as needed
];

const roles = ["All", "Candidate", "Group Lead", "Team Lead", "Project Lead"];
const products = ["Product A", "Product B", "Product C", "Product D"]; // List of products

const Settings = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [roleFilter, setRoleFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRoleChange = (id, newRole) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === id ? { ...candidate, role: newRole } : candidate
      )
    );
  };

  const handleProductChange = (id, selectedOptions) => {
    const selectedProducts = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, products: selectedProducts }
          : candidate
      )
    );
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved candidates:", candidates);
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const roleMatch = roleFilter === "All" || candidate.role === roleFilter;
    const nameMatch = candidate.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return roleMatch && nameMatch;
  });

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Candidate Settings
      </h1>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
          <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-4">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="relative">
            <FaFilter className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full sm:w-auto p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold">
                Name
              </th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold">
                Role
              </th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold">
                Products
              </th>
              <th className="px-3 py-2 text-left text-gray-600 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-3 py-2 border-b border-gray-200">
                  {candidate.name}
                </td>
                <td className="px-3 py-2 border-b border-gray-200">
                  <select
                    value={candidate.role}
                    onChange={(e) =>
                      handleRoleChange(candidate.id, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2 border-b border-gray-200">
                  <Select
                    isMulti
                    options={products.map((product) => ({
                      value: product,
                      label: product,
                    }))}
                    value={candidate.products.map((product) => ({
                      value: product,
                      label: product,
                    }))}
                    onChange={(selectedOptions) =>
                      handleProductChange(candidate.id, selectedOptions)
                    }
                    className="basic-single"
                    classNamePrefix="select"
                  />
                </td>
                <td className="px-3 py-2 border-b border-gray-200 text-right">
                  <button
                    onClick={() =>
                      handleRoleChange(candidate.id, candidate.role)
                    }
                    className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    <FaSave className="inline-block mr-1" /> Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 sm:mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Save All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
