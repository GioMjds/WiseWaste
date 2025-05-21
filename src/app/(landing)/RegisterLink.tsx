
import Link from "next/link";

export default function RegisterLink() {
    return (
        <Link
            href="/register"
            className="bg-button-primary-bg text-button-primary-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-bg-button-hover transition-all"
        >
            Join Smart Community
        </Link>
    )
}