import Link from "next/link";

export const RegisterLink = () => {
  return (
    <>
      <p className="mt-6 text-center text-sm text-gray-400">
        ¿No tienes una cuenta?{" "}
        <Link
          href="/register"
          className="text-mint-green hover:text-mint-green/80 transition-colors"
        >
          Regístrate aquí
        </Link>
      </p>
    </>
  );
};
