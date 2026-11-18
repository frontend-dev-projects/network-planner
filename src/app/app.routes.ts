import { Routes } from "@angular/router";
import { AppLayoutComponent } from "@signal/ui";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/marketing",
    pathMatch: "full",
  },
  {
    path: "marketing",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: AppLayoutComponent,
        data: { theme: "dark" },
        children: [
          {
            path: "",
            loadComponent: () =>
              import("@signal/marketing").then((m) => m.HomePage),
          },
        ],
      },
      {
        path: "",
        component: AppLayoutComponent,
        data: { theme: "light" },
        children: [
          {
            path: "how-it-works",
            loadComponent: () =>
              import("@signal/marketing").then((m) => m.HowItWorksPage),
          },
          {
            path: "engineering",
            loadComponent: () =>
              import("@signal/marketing").then((m) => m.EngineeringPage),
          },
        ],
      },
    ],
  },
  {
    path: "network-planner",
    component: AppLayoutComponent,
    data: { theme: "dark" },
    children: [
      {
        path: "",
        loadComponent: () =>
          import("@signal/planner").then((m) => m.NetworkPlannerPage),
      },
    ],
  },
  {
    path: "performance",
    component: AppLayoutComponent,
    data: { theme: "dark" },
    children: [
      {
        path: "",
        loadComponent: () =>
          import("@signal/performance").then((m) => m.PerformancePage),
      },
    ],
  },
];
