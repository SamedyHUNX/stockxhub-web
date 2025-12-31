import { useState, useMemo } from "react";
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

export default function CountrySelectField() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const selectedCountry = options.find((country) => country.value === value);

  return (
    <div className="space-y-2">
      <Label className="mb-3">Select your country</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value ? (
              <span className="flex items-center gap-2">
                <span>{getFlagEmoji(selectedCountry!.value)}</span>
                <span>{selectedCountry!.label}</span>
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
                    onSelect={() => {
                      setValue(country.value === value ? "" : country.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === country.value ? "opacity-100" : "opacity-0"
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
