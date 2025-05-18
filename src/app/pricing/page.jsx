"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CheckIcon } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        "Unlimited markdown files",
        "Basic formatting tools",
        "Cloud storage (5GB)",
        "Export to PDF",
        "Email support"
      ]
    },
    {
      name: "Pro",
      description: "For professionals and teams",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "Everything in Basic",
        "Advanced formatting tools",
        "Cloud storage (50GB)",
        "Export to multiple formats",
        "Priority support",
        "Team collaboration",
        "Version history"
      ],
      popular: true
    }
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundBeamsWithCollision className="dark:bg-[#0B0B0F] bg-white w-full" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your markdown editing needs
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-2">
            <span className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <span className={billingCycle === "yearly" ? "font-medium" : "text-muted-foreground"}>
              Yearly <span className="text-green-500 text-sm">(Save 16%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}