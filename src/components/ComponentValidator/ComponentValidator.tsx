import _ from "lodash";
import { useState } from 'react'

import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper';
import { ExclamationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { inIframe } from '@/utils';
import { ComponentValidator as ComponentValidatorType, ValidityStatus } from '@/types/components'

const ComponentValidator: React.FC<ComponentValidatorType> = (props: ComponentValidatorType) => {
    const { status, validators, validationInfo, children } = props;
    const [isVisible, setVisibility] = useState(false);

    let [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    let [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
    let { styles, attributes, } = usePopper(referenceElement, popperElement, {
        placement: 'auto',
    })

    var componentStatus;
    if (status) {
        componentStatus = status
    } else if (validators) {
        var valid = _.reduce(validators, function (res, val) {
            return res && val;
        });
        componentStatus = valid ? ValidityStatus.valid : ValidityStatus.invalid
    }

    if (componentStatus === ValidityStatus.invalid && inIframe()) {
        return <div className='mock-border'>
            <div className='flex flex-row-reverse pr-2'>
                <Popover>
                    <Popover.Button ref={setReferenceElement}
                        onMouseEnter={() => setVisibility(true)}
                        onMouseLeave={() => setVisibility(false)}>
                        <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                    </Popover.Button>
                    {isVisible && (
                        <Popover.Panel
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            <div className="rounded-md bg-yellow-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-yellow-800">Requirements:</h3>
                                        <div className="mt-1 text-sm text-yellow-700">
                                            <ul role="list" className="list-disc space-y-1 pl-5">
                                                {_.map(validationInfo, (msg) => <li>{msg}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    )}
                </Popover>
            </div>
            {children}
        </div>
    } else if (componentStatus == ValidityStatus.valid) {
        return <>
            {children}
        </>
    } else {
        return null;
    }
}
export { ComponentValidator }
