import axios from "axios";

interface dataRsvp {
    name: string;
    phone: string;
    message: string;
    present: boolean;
}

const postRsvp = ({ name, phone, message, present }: dataRsvp): void => {
    try {
        axios.post(
            "http://localhost:3000/api/messages/send",
            {
                name,
                phone,
                message,
                present,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                console.log("Response:", response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } catch (error) {
        console.log(error);
    }
};

const getRsvp = async (): Promise<dataRsvp[]> => {
    try {
        const response = await axios.get("http://localhost:3000/api/messages", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const dataRsvp = response.data
        return dataRsvp;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

export { postRsvp, getRsvp };
