export interface NameAvatarProps {
    firstname: string;
    lastname: string;
}

export const NameAvatar = (props: NameAvatarProps) => {
    return (
        <div style={{ backgroundColor: '#2F9277' }} className="flex justify-between rounded-full p-3">
            <h3 className="text-left font-semibold text-white"> {props.firstname.charAt(0)} {props.lastname.charAt(0)} </h3>
        </div>
    )
}