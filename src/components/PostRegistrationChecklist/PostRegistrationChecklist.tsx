import { useEffect, useState } from "react";
import "./styles.css";

export default function PostRegistrationChecklist() {
    const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false, false]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const boxes = localStorage.getItem("PostRegistrationChecklist");
            if (boxes) {
                setCheckboxes(JSON.parse(boxes));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("PostRegistrationChecklist", JSON.stringify(checkboxes));
        }
    }, [checkboxes]);

    const handleCheckboxChange = (index: number) => {
        setCheckboxes((prevCheckboxes) => {
            const updatedCheckboxes = [...prevCheckboxes]; // Create a new array
            updatedCheckboxes[index] = !updatedCheckboxes[index]; // Update the specific checkbox
            return updatedCheckboxes; // Return the updated array
        });
    };

    return (
        <div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[0]}
                    onChange={() => handleCheckboxChange(0)}
                />
                <p>Private and backup keys are secured in a safe place.</p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[1]}
                    onChange={() => handleCheckboxChange(1)}
                />
                <p>VPN is configured on all SGXWallet servers.</p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[2]}
                    onChange={() => handleCheckboxChange(2)}
                />
                <p>Ensure node wallets have sufficient ETH</p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[3]}
                    onChange={() => handleCheckboxChange(3)}
                />
                <p>Accept delegations for the next month</p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[4]}
                    onChange={() => handleCheckboxChange(4)}
                />
                <p>Check telegram notifications (if you enabled them)</p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[5]}
                    onChange={() => handleCheckboxChange(5)}
                />
                <p>
                    Use <a href="/ecosystem/validators/watchdog/overview" target="_blank" rel="norefferer">watchdog</a> to monitor node status.
                </p>
            </div>
            <div className="row">
                <input
                    type="checkbox"
                    checked={checkboxes[6]}
                    onChange={() => handleCheckboxChange(6)}
                />
                <p>Get support from the SKALE validator community</p>
            </div>
        </div>
    );
}
