import React from "react";

const Home = () => {
  return (
    <section className="w-2/3 py-10 m-auto">
      <div className="header flex flex-col items-center text-center justify-center gap-4">
        <h2 className="text-8xl font-semibold">Connect with the world!</h2>
        <p className="text-xl">
          This page doesn't serve a major purpose.. It's just here just in case
          you are a new user and/or not logged in. Also, it shows you the update
          history(probably the most abnormal history)
        </p>
      </div>

      {/* Version History Starts here */}
      <div className="w-full mt-10 py-2 flex flex-col gap-3 justify-start">
        <h2 className="text-4xl font-semibold">Version History</h2>
        <ol className="w-full py-3 flex flex-col gap-4">
          <div>
            <li className="text-2xl list-decimal">Initial Launch</li>
            <p className="text-md">
              In it's early stages, the application only had the basic
              functionalities like Registering, Logging in and creation of
              tweets. It was a really empty canvas which needed a lot of work!
            </p>
          </div>

          <div>
            <li className="text-2xl list-decimal">Update 1.0</li>
            <p className="text-md">
              A lot of emptiness was taken away with this update. Tweets now had
              usernames and a display name for the user, and had the dates they
              were uploaded on. Also The tweet component was slightly changed in
              appearance terms. This made the application a lot more
              presentable.
            </p>
          </div>

          <div>
            <li className="text-2xl list-decimal">Update 1.1</li>
            <p className="text-md">
              The login and sign up forms were imporved in design terms, the
              passoword visibillity toggle was added(I forgot to add it in the
              beggining).Some changes to the server were also made to make sure
              that the tweets and user model work correctly when put together.
            </p>
          </div>

          <div>
            <li className="text-2xl list-decimal">Update 1.12</li>
            <p className="text-md">
              This is the most recent update... And it included the addition of
              avatars, and this page. For avatars, I am still working on the
              whole crop and zoom stuff. But for now, you can fiddle around with
              the photo that works well with the current code😅.
            </p>
          </div>
        </ol>
      </div>
    </section>
  );
};

export default Home;
