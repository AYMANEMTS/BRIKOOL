import React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import {Chip} from "@mui/joy";

function JobCard({ key }) {
    return (
        <div key={key} className="relative p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-between gap-4 mb-2">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="tania andrew"
                    className="w-12 h-12 rounded-full object-cover object-center"
                />
                {/*<button*/}
                {/*    className="select-none rounded-lg bg-gray-900 py-2 px-3 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"*/}
                {/*    type="button"*/}
                {/*>*/}
                {/*    Follow*/}
                {/*</button>*/}
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                    >
                        <MoreVert />
                    </MenuButton>
                    <Menu>
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>Disabled</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </Menu>
                </Dropdown>
            </div>
            <div className={"flex justify-between"}>
                <div className="mb-2 text-base font-medium text-blue-gray-900">Plombier</div>
                <div>
                    <Chip color={"success"}>Enabled</Chip>
                </div>
            </div>

            <p className="text-sm text-gray-700">
                A skilled developer with a passion for creating innovative solutions and a proven track record in full-stack development. Adept at working with a variety of technologies to build robust applications.
            </p>
            <div className="flex items-center gap-8 pt-4 mt-6 border-t border-gray-200">
                <span className={"text-sm text-gray-700"}>12/08/2024 14:30AM</span>
            </div>
        </div>
    );
}

export default JobCard;
