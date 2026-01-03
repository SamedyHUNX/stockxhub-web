import { useState, useMemo, useEffect } from "react";
import countryList from "react-select-country-list";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn, getFlagEmoji } from "@/lib/utils";
import { Control, FieldError } from "react-hook-form";
import { Controller } from "react-hook-form";

interface CountrySelectFieldProps {
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  className?: string; // Standard practice to accept className
  [key: string]: any; // Allow forwarding other props
}

interface CountrySelectFormFieldProps {
  name: string;
  control: Control<any>;
  error?: FieldError;
  required?: boolean;
  className?: string;
}

function CountrySelectField({
  value,
  defaultValue = "",
  onChange,
  className,
  ...props
}: CountrySelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);

  // Use controlled value if provided, otherwise internal state
  const currentValue = value !== undefined ? value : internalValue;

  const options = useMemo(() => countryList().getData(), []);

  // Sync internal state when controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const selectedCountry = options.find(
    (country) => country.value === currentValue
  );

  const handleSelect = (countryValue: string) => {
    const newValue = countryValue === currentValue ? "" : countryValue;

    // Only update internal state if uncontrolled (or always sync, but effect handles the sync back)
    // Actually, good practice for hybrid components is to let the parent drive via useEffect if controlled.
    // If we update both here, it might double render or be redundant, but safe.
    // However, if strict controlled, we depend on parent passing back the new value.
    if (value === undefined) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
    setOpen(false);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Label className="mb-3">Select your country</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
            {...props}
          >
            {currentValue ? (
              <span className="flex items-center gap-2">
                <span>{getFlagEmoji(selectedCountry?.value || "")}</span>
                <span>{selectedCountry?.label}</span>
              </span>
            ) : (
              "Select your country..."
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.label}
                    onSelect={() => handleSelect(country.value)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentValue === country.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <span className="mr-2">{getFlagEmoji(country.value)}</span>
                    {country.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function CountrySelectFormField({
  name,
  control,
  error,
  required,
  className,
}: CountrySelectFormFieldProps) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={required ? { required: "Country is required" } : undefined}
        render={({ field }) => (
          <CountrySelectField
            value={field.value}
            onChange={field.onChange}
            className={className}
          />
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
