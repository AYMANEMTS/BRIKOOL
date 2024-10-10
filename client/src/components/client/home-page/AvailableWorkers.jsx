import React from 'react';
import Carousel from "react-multi-carousel";
import WorkerCard from "../WorkerCard";

function AvailableWorkes() {
    const x = [{b:"a"}, {b:"b"}, {b:"c"}, {b:"d"}, {b:"e"}, {b:"f"}, {b:"g"}, {b:"h"}, {b:"i"}, {b:"j"}, {b:"k"}, {b:"l"}, {b:"m"}];

    return (
        <>
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-2xl font-semibold mb-6 text-center">Availables workers</h1>
                </div>
                <div>
                    <a href="#" className="text-blue-600 font-semibold hover:underline">Voir plus</a>
                </div>
            </div>

            <Carousel
                additionalTransfrom={0}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={3500}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable

            >
                {x.map((item, key) => (
                    <WorkerCard />
                ))}
            </Carousel>
        </>
    )
}

export default AvailableWorkes;