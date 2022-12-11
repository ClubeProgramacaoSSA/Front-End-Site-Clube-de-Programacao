import { Tab } from "@headlessui/react";
import { ContentProps } from "../pages/index";
import { Workshop } from "./Workshop";

//TODO: Active tab indentification

interface TabsProps {
	data: ContentProps[];
}

export function Tabs({ data }: TabsProps) {
	return (
		<Tab.Group defaultIndex={0}>
			<Tab.List className="text-white mt-10 flex gap-4 font-medium text-xl">
				{data.map((item, index) => {
					return (
						<Tab key={index} className="flex gap-2 items-center">
							<img
								className="w-12"
								src={item.iconUrl}
								alt={item.iconDescription}
							/>
							{item.workshopName}
						</Tab>
					);
				})}
			</Tab.List>
			<Tab.Panels className="mt-8">
				{data.map((item, index) => {
					return (
						<Tab.Panel key={index}>
							<Workshop workShop={item} />
						</Tab.Panel>
					);
				})}
			</Tab.Panels>
		</Tab.Group>
	);
}
