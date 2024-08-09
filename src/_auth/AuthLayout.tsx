import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
    // Replace this with your actual authentication logic
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                // Redirect to home page if authenticated
                <Navigate to="/" />
            ) : (
                <>
                    {/* Main section for unauthenticated users */}
                    <section className="flex flex-1 justify-center items-center flex-col py-10">
                        <Outlet />
                    </section>

                    {/* Background image for larger screens */}
                    <img
                        src="/assets/images/background.png"
                        alt="logo"
                        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                    />
                </>
            )}
        </>
    );
};

export default AuthLayout;
