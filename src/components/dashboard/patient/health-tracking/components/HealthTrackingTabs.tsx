
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BiometricsTabContent from './BiometricsTabContent';
import ActivityTabContent from './ActivityTabContent';
import NutritionTabContent from './NutritionTabContent';
import SymptomTrackerTabContent from './SymptomTrackerTabContent';

const HealthTrackingTabs = () => {
  return (
    <Tabs defaultValue="biometrics">
      <TabsList className="mb-4">
        <TabsTrigger value="biometrics">Biometrics</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        <TabsTrigger value="symptom">Symptom Tracker</TabsTrigger>
      </TabsList>

      <TabsContent value="biometrics">
        <BiometricsTabContent />
      </TabsContent>

      <TabsContent value="activity">
        <ActivityTabContent />
      </TabsContent>

      <TabsContent value="nutrition">
        <NutritionTabContent />
      </TabsContent>

      <TabsContent value="symptom">
        <SymptomTrackerTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default HealthTrackingTabs;
