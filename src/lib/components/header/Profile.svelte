<script lang="ts">
    export let username: string;

    const profilePicture: string = `https://api.dicebear.com/5.x/initials/svg?seed=${username}`;
</script>

<div class="flex">
    <img
        class="sm:rounded-b-md rounded-br-md flex-none"
        src={profilePicture}
        alt="avatar"
        width="48px"/>
    <div class="flex-1">
        <p class="px-2 font-bold">{username}</p>
    </div>
</div>