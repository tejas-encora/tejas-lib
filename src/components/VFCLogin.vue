<template>
    <v-card elevation="0">
        <div class="text-center">
            <h1 class="mb-2">Login</h1>
        </div>
        <a href="https://edu-fedorae.netlify.app" name="Fedorae Education" title="Fedorae Education" target="_blank">
            <v-img src="@/assets/logo.png" alt="Fedorae Education Log" contain height="200"></v-img>
        </a>
        <v-card-text>
            <v-form>
                <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email"
                    class="rounded-0" outlined></v-text-field>
                <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password"
                    suffix="| Forgot?" class="rounded-0" outlined></v-text-field>
                <v-btn class="rounded-0" color="#000000" x-large block dark>Login</v-btn>
                <v-card-actions class="text--secondary">
                    <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    No account?
                    <a href="#" class="pl-2" style="color: #000000">Sign Up</a>
                </v-card-actions>
            </v-form>
        </v-card-text>

    </v-card>
</template>

<script>
export default {
    name: 'VFCLogin',
}
</script>

<style lang="css" scoped></style>
