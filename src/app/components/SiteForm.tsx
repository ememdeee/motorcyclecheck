'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from 'lucide-react'
import Link from 'next/link'

interface SiteFormProps {
  reportType?: 'VHR' | 'WS'
  reportStyle?: 'modern' | 'basic'
  reportTab?: boolean
  defaultTab?: 'vin' | 'plate'
}

export function SiteForm({
  reportType = 'VHR',
  reportStyle = 'modern',
  reportTab = true,
  defaultTab = 'vin',
}: SiteFormProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [vin, setVin] = useState<string>('')
  const [plate, setPlate] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [refPage, setRefPage] = useState('')

  console.log(reportStyle, reportTab);

  const states = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' },
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      if (url === window.location.origin || url === `${window.location.origin}/`) {
        setRefPage('homePage')
      } else {
        const slug = url
          .replace(window.location.origin, '')
          .replace(/^\/|\/$/g, '')
          .replace(/\//g, '_')
        setRefPage(slug)
      }
    }
  }, [])

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedValue = e.target.value.toUpperCase()
    setVin(uppercasedValue.slice(0, 17))
  }

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedValue = e.target.value.toUpperCase()
    setPlate(uppercasedValue.slice(0, 8))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '')
    setPhone(numericValue.slice(0, 15))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (activeTab === 'vin') {
      if (!vin || vin.length < 5 || vin.length > 17) {
        newErrors.vin = 'VIN must be between 5 and 17 characters.'
      }
    } else if (activeTab === 'plate') {
      if (!plate || plate.length < 5 || plate.length > 8) {
        newErrors.plate = 'License Plate must be between 5 and 8 characters.'
      }
      if (!state) {
        newErrors.state = 'State is required.'
      }
    }

    if (!email) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (phone && (phone.length < 8 || phone.length > 15)) {
      newErrors.phone = 'Phone number must be between 8 and 15 digits.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const fetchVinData = async (stateInputValue: string, plateInputValue: string): Promise<string> => {
    try {
      const requestData = {
        state: stateInputValue,
        plate: plateInputValue,
        email: 'test@test.com',
      }

      const apiUrl = 'https://app.detailedvehiclehistory.com/landing/get_license'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(requestData),
      })

      const rawResponse = await response.text()
      console.log('Raw API Response:', rawResponse)

      const responseData = JSON.parse(rawResponse)
      console.log('Parsed Response Data:', responseData)

      const { vin } = responseData

      if (!vin) {
        throw new Error('VIN not found in the response')
      }

      return vin
    } catch (error) {
      console.error('Failed to fetch VIN:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      if (activeTab === 'vin') {
        console.log('Submitted Data:', { vin, email, phone })
        
        setVin('')
        setEmail('')
        setPhone('')

        const redirectUrl = reportType === 'WS'
          ? `https://detailedvehiclehistory.com/vin-check/ws-preview?vin=${vin}&email=${email}&mobile=${phone}&ref=${refPage}`
          : `https://detailedvehiclehistory.com/vin-check/preview?vin=${vin}&email=${email}&mobile=${phone}&ref=${refPage}`

        window.location.href = redirectUrl
      } else if (activeTab === 'plate') {
        console.log('Submitted Data:', { plate, state, email, phone })

        try {
          const fetchedVin = await fetchVinData(state, plate)
    
          console.log('Fetched VIN:', fetchedVin)
    
          setPlate('')
          setState('')
          setEmail('')
          setPhone('')
          
          const redirectUrl = reportType === 'WS'
            ? `https://detailedvehiclehistory.com/vin-check/ws-preview?vin=${fetchedVin}&email=${email}&mobile=${phone}&ref=${refPage}`
            : `https://detailedvehiclehistory.com/vin-check/preview?vin=${fetchedVin}&email=${email}&mobile=${phone}&ref=${refPage}`
          
          window.location.href = redirectUrl
        } catch (error) {
          alert('Error fetching VIN. Please try again.' + error)
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  return (
    <Card className="glassmorphism mb-8">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-white/10">
              <TabsTrigger value="vin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">VIN</TabsTrigger>
              <TabsTrigger value="plate" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">License Plate</TabsTrigger>
            </TabsList>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder={activeTab === 'vin' ? "Enter VIN" : "Enter License Plate"}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                  value={activeTab === 'vin' ? vin : plate}
                  onChange={activeTab === 'vin' ? handleVinChange : handlePlateChange}
                />
                {activeTab === 'plate' && (
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105" disabled={isLoading}>
                <Search className="mr-2 h-4 w-4" /> {isLoading ? 'Searching...' : 'Search Motorcycle History'}
              </Button>
            </div>
          </Tabs>
        </form>
        {Object.entries(errors).map(([key, value]) => (
          <p key={key} className="text-red-500 text-sm mt-1">{value}</p>
        ))}
        <p className="text-sm text-gray-400 mt-2">
          No VIN? <Link href="#" className="text-blue-400 hover:underline">Find it here</Link>
        </p>
      </CardContent>
    </Card>
  )
}