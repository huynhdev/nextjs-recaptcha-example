# Vercel Deployment

Take a look at the following video for more complete guideline:

<video src="https://user-images.githubusercontent.com/20434351/201805650-8ae07f06-62fc-4e7d-8b33-f73f931f7481.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px;"></video>

Or follow the steps below.

1. Prepare web project that needs to be deployed.

<img width="1512" alt="Screenshot 2022-11-15 at 9 13 34 AM" src="https://user-images.githubusercontent.com/20434351/201809775-0ffb96b6-dcf7-4d5f-95f5-05371188f1de.png">

3. Export the project by choosing Export -> Next.js (Web), then click Download button.

<img width="407" alt="Screenshot 2022-11-15 at 8 48 49 AM" src="https://user-images.githubusercontent.com/20434351/201808942-b5afcf19-63ca-4a9b-8265-ec8d3938ee69.png">

4. Export progress will show up in bottom right corner, wait for that progress to be completed.

<img width="435" alt="Screenshot 2022-11-15 at 8 49 01 AM" src="https://user-images.githubusercontent.com/20434351/201808960-40f0f4ed-2e47-4eac-a113-f2ffd6c5bd55.png">

5. Next.js project will be downloaded as zip file.

<img width="253" alt="Screenshot 2022-11-15 at 8 49 50 AM" src="https://user-images.githubusercontent.com/20434351/201808966-1d6ffec8-9a35-46ee-af0f-9bcf5692916e.png">

6. Extract that zip file.

<img width="215" alt="Screenshot 2022-11-15 at 8 50 49 AM" src="https://user-images.githubusercontent.com/20434351/201808968-8e9666c8-7d71-473d-8858-24c7146e1765.png">

7. Open terminal, go to that project directory and open your favorite code editor.

<img width="564" alt="Screenshot 2022-11-15 at 8 51 19 AM" src="https://user-images.githubusercontent.com/20434351/201808971-f7dc4d47-880b-46fc-be9b-87392bec59f4.png">

8. Connect the project with the repository, commit and push the project.

<img width="731" alt="Screenshot 2022-11-15 at 8 56 04 AM" src="https://user-images.githubusercontent.com/20434351/201808989-53f72443-b537-4c0f-8efd-d1c8005fdf3a.png">

<img width="1057" alt="Screenshot 2022-11-15 at 8 58 48 AM" src="https://user-images.githubusercontent.com/20434351/201808995-7cdcdaec-5992-4ac7-b641-e8f6786e72f3.png">

9. Go to Vercel dashboard and click **Add new project**.

<img width="275" alt="Screenshot 2022-11-15 at 8 59 03 AM" src="https://user-images.githubusercontent.com/20434351/201809009-13fd61b2-6ff1-461f-b6df-c4653d10805d.png">

10. Click **From Github**, type repository name, if it's not found then click **Configure Github App**.

<img width="691" alt="Screenshot 2022-11-15 at 8 59 27 AM" src="https://user-images.githubusercontent.com/20434351/201809013-341bf572-2c62-4fe5-80d4-2074f3acb07b.png">

11. Click **Configure** in the correct organization/personal account.

<img width="805" alt="Screenshot 2022-11-15 at 8 59 40 AM" src="https://user-images.githubusercontent.com/20434351/201809015-80812a22-c637-428d-b396-588718064104.png">

12. Type repository name then click **Save**.

<img width="503" alt="Screenshot 2022-11-15 at 9 00 01 AM" src="https://user-images.githubusercontent.com/20434351/201809023-5572c7a7-9f46-4e24-b2a3-84e91311ab6f.png">

13. Go back to Vercel dashboard, now the repository name appears. After that, click **Import**.

<img width="685" alt="Screenshot 2022-11-15 at 9 00 19 AM" src="https://user-images.githubusercontent.com/20434351/201809028-a78ff37e-0f72-418a-85a9-84ec5d2d6d86.png">

14. Expand the **Build and Output Settings**, then click the **Override** toggle and fill `yarn initial` in the input form.

<img width="856" alt="Screenshot 2022-11-15 at 9 00 53 AM" src="https://user-images.githubusercontent.com/20434351/201809031-7e0c9536-daab-45eb-954e-98b02362d10b.png">

15. Open `.env` file in the project, copy and paste all of those value into the **Environment Variables** section.

Specifically for `NEXTAUTH_URL`, fill with domain name assigned to the project. By default, it will be assigned as `https://<project-name>.vercel.app`. Let say, your project name is `jitera-vercel`, assigned domain name will be `https://jitera-vercel.vercel.app`.

Similarly for `NEXT_PUBLIC_API_URL`, fill with backend host. If backend is not ready yet, we can just fill with the same value as `NEXTAUTH_URL` above.

After that, click **Deploy**.

<img width="854" alt="image" src="https://user-images.githubusercontent.com/20434351/202969113-95724e37-10ef-4372-bea1-ccd8a233614e.png">

16. Wait for the deployment process to complete.

<img width="854" alt="Screenshot 2022-11-15 at 9 02 32 AM" src="https://user-images.githubusercontent.com/20434351/201809040-0c459138-7f56-4dfe-9d89-7d292ebb2062.png">

17. Once deployed, click **Go to Dashboard**.

<img width="1512" alt="Screenshot 2022-11-15 at 9 05 20 AM" src="https://user-images.githubusercontent.com/20434351/201809048-e676cff0-5b80-45ea-a747-9ff584c1bbb8.png">

18. Click the link as captured below.

<img width="1222" alt="Screenshot 2022-11-15 at 9 05 38 AM" src="https://user-images.githubusercontent.com/20434351/201809066-276fdbed-c85b-4863-acbb-c3e366daeedf.png">

19. Browser will open your project that has been deployed to Vercel.

<img width="1512" alt="Screenshot 2022-11-15 at 9 06 10 AM" src="https://user-images.githubusercontent.com/20434351/201809071-d7dcb4c2-bb8b-4d81-bfda-c0af858025ba.png">
