import React from 'react';

function WorkersListCard({key}) {
    return (
        <div key={key} className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Worker"
                 className="h-32 w-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-semibold text-center mb-2">Worker Name</h3>
            <p className="text-center text-gray-500 mb-2">Category</p>
            <p className="text-center text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio.</p>

            {/* Rating and Contact Button on the Same Line */}
            <div className="flex justify-between items-center mt-4">
                <div className="text-left">
                    <span className="bg-yellow-400 text-white rounded-full px-3 py-1 text-sm">4.5 ⭐</span>
                </div>
                <div className="text-right">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WorkersListCard;
