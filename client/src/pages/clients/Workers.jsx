import React from 'react';
import FiltterSecion from "../../components/client/workers-page/FiltterSecion";
import {Pagination} from "@mui/material";
import WorkerCard from "../../components/client/WorkerCard";

function Workers() {
    const x = [{b:"a"}, {b:"b"}, {b:"c"}, {b:"d"}, {b:"e"}, {b:"f"}, {b:"g"}, {b:"h"}, {b:"i"}, {b:"j"}, {b:"k"}, {b:"l"}, {b:"m"}];

    return (
        <>
            <FiltterSecion />
            {/* Workers List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-3 ">
                {/* Worker Card */}
                {x.map((item,key) => (
                    <WorkerCard key={key} />
                ))}
            </div>
            <div className={"flex justify-center my-6"}>
                <Pagination count={10} />
            </div>

        </>
    );
}

export default Workers;