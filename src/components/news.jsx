"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NewsCarausal() {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-02-25&sortBy=publishedAt&apiKey=061340a272864862b5d860161b76bec9"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel className="w-full ">
      <CarouselContent className="w-96">
        {mynews.map((ele, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className=" h-96 grid grid-cols-1">
                    <div className="flex justify-center items-center p-2 object-cover ">
                      <Image
                        src={
                          ele.urlToImage == null
                            ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                            : ele.urlToImage
                        }
                        className=""
                        alt="..."
                        width={800}
                        height={800}
                      />
                    </div>

                    <div className="p-2 grid grid-rows-3">
                      <h5 className="text-md font-light">
                        {ele.author === "" ? "Janelle Ash" : ele.author}
                      </h5>
                      <p className="text-sm font-medium ">{ele.title}</p>
                      <Link
                        href={ele.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
