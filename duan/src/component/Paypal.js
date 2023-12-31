import React, {useEffect, useRef} from "react";

export default function Paypal() {
    const paypal = useRef();
    useEffect(() => {
        console.log(window.paypal)
        window.paypal?.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "cool looking table ",
                            amount: {
                                currency_code: "CAD",
                                value: 650.00
                            }
                        }
                    ]

                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            },
        }).render(paypal.current)

    }, [])

    return (
        <>

            <div>
                <div ref={paypal}>
                </div>
            </div>

        </>
    )
}