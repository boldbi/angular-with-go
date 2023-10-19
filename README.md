# Bold BI Embedded Sample in Angular with Go

This Bold BI Angular with Go sample contains the Dashboard embedding sample. In this sample, the Angular application acts as the front-end, and the Go sample act as the back-end application. This sample demonstrates the dashboard rendering with the available dashboard in your Bold BI server.

## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/966e2735-e9ee-469a-9781-4e4f23021b04)

 ## Requirements/Prerequisites
 
 * [Go installer](https://go.dev/dl/)
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 
 > **NOTE:** Node.js v14.16 to v18.18 are supported.

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox.

 ## Configuration

  * Please get the [Angular with Go](https://github.com/boldbi/angular-with-go-sample) sample from GitHub.

  * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.
  ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-go-sample/tree/master/Go) within the application. Please ensure you have placed it in the application, as shown in the following image.
    
    ![EmbedConfig image](https://user-images.githubusercontent.com/129486688/252304030-bf994470-ed88-46e3-9b3e-2c941d42a2a6.png)

## Run a Sample Using Command Line Interface

  1. Open the **command line interface** and navigate to the specified file [location](https://github.com/boldbi/angular-with-go-sample/tree/master/Go) where the project is located.
   
  2. Run the back-end `Go` sample by using the following command `go run main.go`.
   
  3. Open the **command line interface** and navigate to the specified file [location](https://github.com/boldbi/angular-with-go-sample/tree/master/Angular-14) where the project is located.
   
  4. Install all dependent packages by executing the following command `npm install`.
   
  5. Finally, run the application using the following command `ng serve`.
   
  6. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200). Copy this URL and paste it into your default web browser.

 ## Developer IDE

  * [Visual Studio Code](https://code.visualstudio.com/download)

 ### Run a Sample Using Visual Studio Code

 * Open the `Go` sample in **Visual Studio Code.**

 * Run the back-end `Go` sample by using the following command in the terminal `go run main.go`.

 * Open the `Angular` sample in a new window of **Visual Studio Code.**

 * Install all dependent packages by executing the following command `npm install`.

 * Finally, run the application using the following command `ng serve`.

 * After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200). Copy this URL and paste it into your default web browser.

   ![Dashboard view](https://github.com/boldbi/aspnet-core-sample/assets/91586758/966e2735-e9ee-469a-9781-4e4f23021b04)

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
