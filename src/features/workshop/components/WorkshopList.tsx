/* eslint-disable indent */
import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CaretDown, CheckCircle } from "phosphor-react";
import { Workshop } from "./Workshop";
import { ContentProps } from "../pages/index";

export interface WorkshopListProps {
	workshops: ContentProps[];
}

export function WorkshopList({ workshops }: WorkshopListProps) {
	const [selectedWorkshop, setSelectedWorkshop] = useState<ContentProps>(
		workshops[0]
	);
	return (
		<>
			<Listbox
				as="section"
				className="mt-10 flex flex-col"
				value={selectedWorkshop}
				onChange={setSelectedWorkshop}
			>
				{({ open }) => (
					<>
						<Listbox.Label className="font-semibold text-2xl mb-5">
							Selecione um Work<span className="text-orange">shop</span>:
						</Listbox.Label>
						<Listbox.Button className="py-2 flex items-center justify-center gap-10 bg-neutral-800 rounded-full focus:outline-none">
							<img
								
								className = "w-8 rounded-full border-2"
								src={selectedWorkshop.url_imagem}
								alt={selectedWorkshop.descricao_imagem}
							/>
							<span className="text-2xl">{selectedWorkshop.nome_projeto}</span>
							<CaretDown
								className={`${
									open ? "rotate-180" : null
								} transition-transform duration-500`}
								size={32}
							/>
						</Listbox.Button>
						{open && (
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="mt-3 focus:outline-none">
									{workshops.map((workshop, index) => {
										return (
											<Listbox.Option value={workshop} key={index}>
												{({ active, selected }) => {
													const firstItem = index == 0;
													const lastItem = index == workshops.length - 1;
													return (
														<li
															className={`
                                								${
																	active
																		? "bg-neutral-500 scale-105 z-10 transition-transform duration-300"
																		: "bg-neutral-800"
																} 
                                ${firstItem ? "rounded-t-2xl" : null} 
                                ${lastItem ? "rounded-b-2xl" : null} 
                                py-2 flex justify-center items-center text-white relative`}
														>
															{selected && (
																<CheckCircle
																	className="absolute left-3"
																	color="lightgreen"
																	weight="duotone"
																	size={32}
																/>
															)}
															<div className="flex gap-3">
																<img
																	className="w-8"
																	
																	src={workshop.url_imagem} />
																<span className="text-2xl">
																	{workshop.nome_projeto}
																</span>
															</div>
														</li>
													);
												}}
											</Listbox.Option>
										);
									})}
								</Listbox.Options>
							</Transition>
						)}
					</>
				)}
			</Listbox>
			<Workshop workShop={selectedWorkshop} />
		</>
	);
}
