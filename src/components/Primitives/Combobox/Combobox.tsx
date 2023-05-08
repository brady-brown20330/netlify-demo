import { FunctionComponent, useState, useEffect, Fragment } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from '@headlessui/react'

import { Combobox as ComboboxProps, CbOption } from '@/types/components'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ComboBox: FunctionComponent<ComboboxProps> = ({ items, onValueChange, defaultItem }: ComboboxProps) => {
    const [selectedItem, setSelectedItem] = useState<CbOption | null>(defaultItem)
    const [itemCollection, setItemCollection] = useState<CbOption[]>(items)
    const [query, setQuery] = useState('')

    const onSelectedValueChange = (item: CbOption | null) => {

        setSelectedItem(item)
        if (onValueChange && item) {
            onValueChange(item)
        }
    }
    useEffect(() => {
        setSelectedItem(defaultItem)
    }, [defaultItem])

    useEffect(() => {
        setItemCollection(items)
    }, [items])

    const filteredItems =
        query === ''
            ? itemCollection
            : itemCollection.filter((item) => {
                return item.text.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selectedItem}
            onChange={(event) => {
                onSelectedValueChange(event)
            }}
            as="div" >
            <div className="relative">
                <Combobox.Input
                    className="input w-full z-1 rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    displayValue={(item: CbOption) => item?.text}
                    onChange={(event) => setQuery(event.target.value)}
                >
                </Combobox.Input>
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>
                <Transition
                    enter="transition duration-300 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    {filteredItems && filteredItems?.length > 0 && (
                        <Combobox.Options className="absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredItems.map((item: any) => (
                                <Combobox.Option
                                    key={item?.value}
                                    value={item}
                                    className={({ active }) =>
                                        classNames(
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                        )
                                    }
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                                {item.emojiUnicode ? item.emojiUnicode :
                                                    item.imageUrl ? <img src={item.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> : ''}
                                                <span className={classNames('ml-3 truncate', selected ? 'font-semibold' : '')}>{item?.text}</span>
                                            </div>
                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        active ? 'text-white' : 'text-indigo-600'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                </Transition>
            </div>
        </Combobox>
    )
}

export default ComboBox