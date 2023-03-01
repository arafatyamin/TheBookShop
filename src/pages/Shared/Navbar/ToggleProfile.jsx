import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ToggleProfile = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    return (
        <div class="overflow-hidden flex items-center justify-center" style={{background: "#edf2f7"}}>
{user?.uid?<div class="">
      <div class="bg-white rounded overflow-hidden shadow-lg">
        <div class="text-center p-6  border-b">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src={user?.photoURL
            }
            alt="Randy Robertson"
          />
          <p class="pt-2 text-lg font-semibold">{user?.displayName}</p>
          <p class="text-sm text-gray-600">{user?.email}</p>
          <div class="mt-5">
            <Link
              to=""
              class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Manage your Account
            </Link>
          </div>
        </div>
        <div class="border-b">
          
        </div>

        <div class="">
          <Link to="" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Product updates</p>
          </Link>
          <Link to="" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Status updates</p>
          </Link>
          <Link to="" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Support FAQ</p>
          </Link>
          <Link to="" onClick={()=>logOut()} class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Logout</p>
          </Link>
        </div>
      </div>
    </div>:""}
</div>
    );
};

export default ToggleProfile;