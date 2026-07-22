<template>
 
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white login-page">
    <div class="login-image">
      <img src="/src/assets/loginlogo-iuzKgpG8.svg" alt="">
    </div>
    <div class="login">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Log in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-black">Email address</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/30 placeholder:text-black-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-black">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-[#7ed321] hover:text-[#7ed321]">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/30 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <router-link to="/Dashboard">
              <button type="submit" class="flex w-full justify-center rounded-md bg-[#7ed321] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#7ed321] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Log in</button>
          </router-link>
        
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-400">
        Don't have an account?
        {{ ' ' }}
       <router-link to="/signup"><a href="#" class="font-semibold text-[#7ed321]">Sign up</a></router-link> 
      </p>
    </div>
     </div>
  </div>

  
</template>
<style>
.login-page{
  display: flex;
  flex-direction: row;
}
.login-image{
  flex: 1;
}
.login{
  flex: 1;
}


@media (max-width: 900px){
  .login-image{
    display: none;
  }
}
</style>
