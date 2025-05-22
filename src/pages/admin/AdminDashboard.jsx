import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Settings, Smartphone, Laptop, PenTool as Tool } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data for dashboard statistics
  const stats = [
    { id: 1, name: 'Total Products', value: '248', icon: <ShoppingBag className="h-6 w-6 text-blue-600" /> },
    { id: 2, name: 'Total Users', value: '1,257', icon: <Users className="h-6 w-6 text-green-600" /> },
    { id: 3, name: 'Total Orders', value: '845', icon: <ShoppingBag className="h-6 w-6 text-purple-600" /> },
    { id: 4, name: 'Total Revenue', value: '₹24,89,756', icon: <Settings className="h-6 w-6 text-amber-600" /> },
  ];

  // Mock data for recent products
  const recentProducts = [
    { id: 1, name: 'iPhone 16 Pro', category: 'Phone', price: '₹129,999', status: 'In Stock' },
    { id: 2, name: 'MacBook Air M3', category: 'Laptop', price: '₹114,900', status: 'Low Stock' },
    { id: 3, name: 'iPad Pro 12.9"', category: 'Tablet', price: '₹99,900', status: 'In Stock' },
    { id: 4, name: 'AirPods Pro 2', category: 'Accessories', price: '₹24,900', status: 'Out of Stock' },
    { id: 5, name: 'Apple Watch Series 9', category: 'Wearable', price: '₹41,900', status: 'In Stock' },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Dashboard content */}
        <div className="py-4">
          {/* Stats */}
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {item.value}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin features */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Manage your store</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to="/admin/products"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Manage Products</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Add, edit, or remove products from your inventory
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/admin/users"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Manage Users</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        View and manage user accounts and permissions
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/admin/orders"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ShoppingBag className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Manage Orders</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        View and process customer orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/admin/repairs"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Tool className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Manage Repairs</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Track and update repair service requests
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/admin/settings"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Settings className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Store Settings</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Configure your store settings and preferences
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent products */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Recent Products</h2>
              <Link 
                to="/admin/products" 
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View all
              </Link>
            </div>
            <div className="mt-4 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentProducts.map((product) => (
                          <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{product.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{product.price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${
                                  product.status === 'In Stock'
                                    ? 'bg-green-100 text-green-800'
                                    : product.status === 'Low Stock'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {product.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">
                                Edit
                              </a>
                              <a href="#" className="text-red-600 hover:text-red-900">
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
