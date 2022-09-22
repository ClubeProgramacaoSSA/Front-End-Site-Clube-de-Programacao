import { Tab } from "@headlessui/react";
import { GithubLogo, FilePdf } from "phosphor-react";
import { Content } from "../index";

//TODO: Active tab indentification


interface TabsProps {
  data: Content[];
}

export function Tabs({ data }: TabsProps) {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="text-white mt-10 flex gap-4 font-medium text-xl">
        {data.map((item, index) => {
          return (
            <Tab key={index} className="flex gap-2 items-center">
              <img className="w-12" src={item.logoUrl} alt={item.alt} />
              {item.workshop}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels className="mt-8">
        {data.map((item, index) => {
          return (
            <Tab.Panel key={index}>
              <h2 className="font-bold text-2xl mt-10 text-center mb-5">
                {item.title}
              </h2>
              <div className="text-2xl font-semibold flex flex-col items-center gap-2">
                <img
                  className="w-13"
                  src={item.avatarUrl}
                  alt="Avatar do responsavel"
                />
                <div className="flex flex-col items-center">
                  <span>{item.avatarName}</span>
                  <span className="text-sm">{item.social}</span>
                </div>
              </div>
              <p className="font-medium text-justify mt-10 text-xl mb-5">
                {item.content}
              </p>
              <div className="flex flex-col gap-5 items-center mb-10 font-bold text-xl">
                <a
                  className="px-6 py-2 flex gap-3 items-center border-solid border-2 rounded-lg 
                  border-[#FB9304] hover:scale-125 hover:bg-[#FB9304] duration-300"
                  href=""
                >
                  <FilePdf size={32} />
                  PDF
                </a>
                <a
                  className="px-6 py-2 flex gap-3 items-center border-solid border-2 rounded-lg 
                  border-[#AD00FF] hover:scale-125 hover:bg-[#AD00FF] duration-300"
                  href=""
                >
                  <GithubLogo size={32} />
                  GITHUB
                </a>
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
