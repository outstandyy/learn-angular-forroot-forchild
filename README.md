### forRoot() vs forChild()

The `forRoot()` static method is a convention that makes it easy for developers to configure services and providers that are intended to be singletons. A good example of `forRoot()` is the `RouterModule.forRoot()` method.

Only call and import a `forRoot()` result in the root application module, AppModule. Avoid importing it in any other module, particularly in a lazy-loaded module.

#### NOTE:
The `forRoot()` import can be used in a module other than AppModule. Importantly, `forRoot()` should only be called once, and the module that imports the `forRoot()` needs to be available to the root `ModuleInjector`.

For a service, instead of using `forRoot()`, specify `providedIn: 'root'` on the service's `@Injectable()` decorator, which makes the service automatically available to the whole application and thus singleton by default.

RouterModule also offers a `forChild()` static method for configuring the routes of lazy-loaded modules.

`forRoot()` and `forChild()` are conventional names for methods that configure services in root and feature modules respectively.

Follow this convention when you write similar modules with configurable service providers.

#### Resources
- https://www.youtube.com/watch?v=PU_xpHxZkrE&t=360s&ab_channel=DecodedFrontend
- https://indepth.dev/posts/1056/avoiding-common-confusions-with-modules-in-angular
